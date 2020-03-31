"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Article = /** @class */ (function () {
    function Article() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid', {
            name: 'id',
        }),
        __metadata("design:type", String)
    ], Article.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'uid',
            type: 'varchar',
            nullable: false
        }),
        __metadata("design:type", String)
    ], Article.prototype, "uid", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'title',
            type: 'varchar',
            length: 255
        }),
        __metadata("design:type", String)
    ], Article.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'markdown',
            type: 'text'
        }),
        __metadata("design:type", String)
    ], Article.prototype, "markdown", void 0);
    __decorate([
        typeorm_1.Column({
            name: 'public',
            type: 'int',
            nullable: false,
            default: 1,
            comment: '文章是否公开'
        }),
        __metadata("design:type", Number)
    ], Article.prototype, "public", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({
            name: 'create_at'
        }),
        __metadata("design:type", Date)
    ], Article.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn({
            name: 'update_at'
        }),
        __metadata("design:type", Date)
    ], Article.prototype, "updateAt", void 0);
    Article = __decorate([
        typeorm_1.Entity({
            name: 'article',
            database: 'website',
            engine: 'InnoDB'
        })
    ], Article);
    return Article;
}());
exports.default = Article;
