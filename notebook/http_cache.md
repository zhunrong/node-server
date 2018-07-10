# http缓存

根据是否需要向服务器发起请求，http缓存可以分为`强制缓存`与`协商缓存`。  
`强制缓存`是指如果缓存没有过期，客户端不会向服务器发起请求询问缓存的有效性，直接读取缓存数据。与`强制缓存`相关的两个http响应头分别是`Expires`和`Cache-Control`。  
`协商缓存`需要客户端与服务端发生交互，客户端发送本地缓存的标识，由服务端根据标识决定缓存是否有效。
两类缓存同时存在时，强制缓存优先级较高。

## 强制缓存

### `Expires`头
`Expires`头部对应的值是服务器设置的资源过期时间，浏览器根据这个时间来判断缓存是否失效，但是服务器的时间常常与客户端的时间有误差，这种判断并不可靠，所以`Expires`现在很少使用（`Expires`属于HTTP 1.0）。
```
Expires:Sat, 20 Aug 2016 01:40:57 GMT
```

### `Cache-Control`头
响应头与请求头都支持这个属性。通过设置不同的值定义缓存策略。
1. 禁止进行缓存
> 缓存中不会存储响应内容
```
Cache-Control:no-store
```
2. 公共缓存
> 'public'表示该响应可以被中间人缓存（中间代理、CDN等），默认是私有缓存'private'
```
Cache-Control:public
```
3. 私有缓存
> 'private'表示该响应是专用于某用户的，中间人不能缓存此响应
```
Cache-Control:private
```
4. 缓存时间
> 'max-age={seconds}'表示缓存将在seconds秒后失效
```
Cache-Control:max-age=1000000
```
5. 协商缓存
> 'no-cache'表示客户端必须每次询问服务端缓存是否失效，从而决定是否使用缓存内容
```
Cache-Control:no-cache
```

## 协商缓存
`协商缓存`策略下，即使本地有缓存数据，客户端任然会向服务端发送一个请求，并且携带本地缓存的标识，服务端通过这个标识来判断缓存是否过期，如果缓存过期，返回新的数据；如果没有过期，返回304状态码告知客户端可以继续使用缓存。缓存的标识可以通过两种方式来传递。

1. 方式一：`Last-Modified`响应头和`If-Modified-Since`请求头
> 响应头`Last-Modified`的值是服务端返回的资源最后修改时间，这个值将在下一次客户端请求时作为请求头`If-Modified-Since`的值发送给服务端，服务端对比这个值与资源的最近一次修改时间，从而决定缓存是否过期。
```
# request
If-Modified-Since: Thu, 28 Jun 2018 12:12:38 GMT
# response
Last-Modified: Thu, 28 Jun 2018 12:12:38 GMT
```
2. 方式二：`ETag`响应头与`If-None-Match`请求头
> 响应头`ETag`的值是服务端返回的资源的唯一标识（资源一旦修改，该标识就会变化）,这个值将在下一次客户端请求时作为请求头`If-None-Match`的值发送给服务端，服务端进行对比后决定缓存是否过期。
```
# request
If-None-Match: W/"2a9-164464f492d"
# response
ETag: W/"2a9-164464f492d"
```
一般来讲`ETag`与`Last-Modified`可能同时存在，但是`ETag`的优先级会更高。