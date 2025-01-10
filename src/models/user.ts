import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    timestamps: true,
    tableName: 'users',
})

export class User extends Model {
    //obrigatório
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    //obrigatório
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string;

    //obrigatório
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    age!: number;
}