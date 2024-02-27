<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231021173301 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE city (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE work_time (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE advertisements ADD working_time_id INT DEFAULT NULL, ADD city_id INT DEFAULT NULL, ADD start_price INT NOT NULL');
        $this->addSql('ALTER TABLE advertisements ADD CONSTRAINT FK_5C755F1E809A7F7B FOREIGN KEY (working_time_id) REFERENCES work_time (id)');
        $this->addSql('ALTER TABLE advertisements ADD CONSTRAINT FK_5C755F1E8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('CREATE INDEX IDX_5C755F1E809A7F7B ON advertisements (working_time_id)');
        $this->addSql('CREATE INDEX IDX_5C755F1E8BAC62AF ON advertisements (city_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE advertisements DROP FOREIGN KEY FK_5C755F1E8BAC62AF');
        $this->addSql('ALTER TABLE advertisements DROP FOREIGN KEY FK_5C755F1E809A7F7B');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE work_time');
        $this->addSql('DROP INDEX IDX_5C755F1E809A7F7B ON advertisements');
        $this->addSql('DROP INDEX IDX_5C755F1E8BAC62AF ON advertisements');
        $this->addSql('ALTER TABLE advertisements DROP working_time_id, DROP city_id, DROP start_price');
    }
}
