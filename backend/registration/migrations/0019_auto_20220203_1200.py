# Generated by Django 3.0.3 on 2022-02-03 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0018_auto_20220203_1155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='53454', max_length=12),
        ),
    ]
