# Generated by Django 3.0.3 on 2022-02-05 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0056_auto_20220204_2018'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='87586', max_length=12),
        ),
    ]
