/*
Navicat MySQL Data Transfer

Source Server         : 本地mysql
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : web_chat

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-04-03 13:30:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL DEFAULT '',
  `gender` int(1) unsigned NOT NULL DEFAULT '0',
  `age` int(3) unsigned NOT NULL DEFAULT '0',
  `province` varchar(255) NOT NULL DEFAULT '',
  `city` varchar(255) NOT NULL DEFAULT '',
  `say` varchar(255) NOT NULL DEFAULT '',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10004 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('10000', 'zhunrong122', 'sdfsdfsdf', '', '0', '0', '', '', '', '2018-04-03 13:04:31', '2018-04-03 13:04:31');
INSERT INTO `user` VALUES ('10002', 'zhunrong123', 'sdfsdfsdf', '', '0', '0', '', '', '', '2018-04-03 13:12:19', '2018-04-03 13:12:19');
INSERT INTO `user` VALUES ('10003', 'zhunrong', '119', '', '0', '0', '', '', '', '2018-04-03 13:27:45', '2018-04-03 13:27:45');
