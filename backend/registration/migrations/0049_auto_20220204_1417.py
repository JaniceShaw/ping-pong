# Generated by Django 3.0.3 on 2022-02-04 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0048_auto_20220204_1413'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='77319', max_length=12),
        ),
    ]
