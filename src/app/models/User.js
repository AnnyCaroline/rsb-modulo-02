import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
                password: Sequelize.VIRTUAL, // campo que não vai existir na base de dados, só no meu código/model
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
                // veja mais opções com CTRL+SPACE
            }
        );

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default User;
