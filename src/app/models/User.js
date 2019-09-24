import Sequelize, { Model } from 'sequelize';

class User extends Model {
    // metodo chamado automaticamente pelo sequelize

    // sequelize é a minha conexão com o bd
    static init(sequelize) {
        super.init(
            {
                // colunas que vamos ter na nossa tabela
                // podemos evitar columas de chave
                // primária, chave estrangeira, e até as updated_at e created_at

                // Em outras palavras, só as colunas inseridas pelo usuário
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                // veja mais opções com CTRL+SPACE
            }
        );
    }
}

export default User;
