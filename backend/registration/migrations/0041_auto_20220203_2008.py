# Generated by Django 3.0.3 on 2022-02-03 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0040_auto_20220203_1958'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='65721', max_length=12),
        ),
    ]
