# Generated by Django 3.0.3 on 2022-02-07 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0076_auto_20220206_1342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='38473', max_length=12),
        ),
    ]
