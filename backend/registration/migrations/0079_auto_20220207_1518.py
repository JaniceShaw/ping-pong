# Generated by Django 3.0.3 on 2022-02-07 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0078_auto_20220207_1159'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='21371', max_length=12),
        ),
    ]