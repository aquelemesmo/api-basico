import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: 'products',
})

export class Product extends Model {
    //obrigatório
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    //obrigatório
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    price!: number;

    //obrigatório
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    type!: string;

    //obrigatório
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    owner!: number;
}