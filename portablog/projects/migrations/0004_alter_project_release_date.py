# Generated by Django 4.2.1 on 2023-07-28 20:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_alter_project_last_update'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='release_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
