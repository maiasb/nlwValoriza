import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
// IMPORTAÇÃO DE LIB PARA A CRIAÇÃO DE ID DO USUÁRIO
// PADRÃO V4 É EMBARALHADO
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

// TABELA NO QUAL SERÁ INSERIDO O NOVO USUÁRIO
@Entity("users")
class User {

    // CHAVE PRIMÁRIA
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    // CONSTRUTOR VERIFICA SE ID EXISTE. SE NÃO, ID RECEBE O ID DE UUID
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
