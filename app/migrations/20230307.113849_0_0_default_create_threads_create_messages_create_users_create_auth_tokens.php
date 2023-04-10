<?php

declare(strict_types=1);

namespace Migration;

use Cycle\Migrations\Migration;

class OrmDefault2cd2e397edb11efba3b2a59ba59a6f0c extends Migration
{
    protected const DATABASE = 'default';

    public function up(): void
    {
        $this->table('threads')
        ->addColumn('id', 'primary', ['nullable' => false, 'default' => null])
        ->addColumn('name', 'string', ['nullable' => false, 'default' => null, 'size' => 255])
        ->setPrimaryKeys(['id'])
        ->create();
        $this->table('users')
        ->addColumn('id', 'primary', ['nullable' => false, 'default' => null])
        ->addColumn('username', 'string', ['nullable' => false, 'default' => null, 'size' => 255])
        ->addColumn('password', 'string', ['nullable' => false, 'default' => null, 'size' => 255])
        ->addIndex(['username'], ['name' => 'users_index_username_6406ea0978e00', 'unique' => true])
        ->setPrimaryKeys(['id'])
        ->create();
        $this->table('messages')
        ->addColumn('id', 'primary', ['nullable' => false, 'default' => null])
        ->addColumn('text', 'text', ['nullable' => false, 'default' => null])
        ->addColumn('thread_id', 'integer', ['nullable' => false, 'default' => null])
        ->addColumn('user_id', 'integer', ['nullable' => false, 'default' => null])
        ->addIndex(['thread_id'], ['name' => 'messages_index_thread_id_6406ea0978b5b', 'unique' => false])
        ->addIndex(['user_id'], ['name' => 'messages_index_user_id_6406ea0978c28', 'unique' => false])
        ->addForeignKey(['thread_id'], 'threads', ['id'], [
            'name' => 'messages_foreign_thread_id_6406ea0978b6e',
            'delete' => 'CASCADE',
            'update' => 'CASCADE',
        ])
        ->addForeignKey(['user_id'], 'users', ['id'], [
            'name' => 'messages_foreign_user_id_6406ea0978c39',
            'delete' => 'CASCADE',
            'update' => 'CASCADE',
        ])
        ->setPrimaryKeys(['id'])
        ->create();
        $this->table('auth_tokens')
        ->addColumn('id', 'string', ['nullable' => false, 'default' => null, 'size' => 64])
        ->addColumn('hashed_value', 'string', ['nullable' => false, 'default' => null, 'size' => 128])
        ->addColumn('created_at', 'datetime', ['nullable' => false, 'default' => null])
        ->addColumn('expires_at', 'datetime', ['nullable' => true, 'default' => null])
        ->addColumn('payload', 'binary', ['nullable' => false, 'default' => null])
        ->setPrimaryKeys(['id'])
        ->create();
    }

    public function down(): void
    {
        $this->table('auth_tokens')->drop();
        $this->table('messages')->drop();
        $this->table('users')->drop();
        $this->table('threads')->drop();
    }
}
