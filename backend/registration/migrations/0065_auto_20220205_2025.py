# Generated by Django 3.0.3 on 2022-02-05 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0064_auto_20220205_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='58981', max_length=12),
        ),
    ]