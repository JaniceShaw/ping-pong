# Generated by Django 3.0.3 on 2022-02-03 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0022_auto_20220203_1214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='63696', max_length=12),
        ),
    ]