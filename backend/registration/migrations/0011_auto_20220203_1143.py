# Generated by Django 3.0.3 on 2022-02-03 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0010_auto_20220203_1143'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='94276', max_length=12),
        ),
    ]
