# Generated by Django 3.0.3 on 2022-02-04 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0046_auto_20220204_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='58364', max_length=12),
        ),
    ]
