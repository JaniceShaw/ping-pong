# Generated by Django 3.0.3 on 2022-02-03 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0024_auto_20220203_1227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='12619', max_length=12),
        ),
    ]