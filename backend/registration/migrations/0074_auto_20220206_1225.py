# Generated by Django 3.0.3 on 2022-02-06 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0073_auto_20220206_1056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='35288', max_length=12),
        ),
    ]
