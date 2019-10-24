import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity({
  name: 'article',
  database: 'zr_dev',
  engine: 'InnoDB',
  synchronize: true
})
class Article {

  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id!: string

  @Column({
    name: 'uid',
    type: 'varchar',
    nullable: false
  })
  uid!: string

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50
  })
  title!: string

  @Column({
    name: 'markdown',
    type: 'text'
  })
  markdown!: string

  @CreateDateColumn({
    name: 'create_at'
  })
  createAt!: Date

  @UpdateDateColumn({
    name: 'update_at'
  })
  updateAt!: Date

}

export default Article