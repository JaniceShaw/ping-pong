# Generated by Django 3.0.3 on 2022-02-06 10:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0071_auto_20220206_0959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='68795', max_length=12),
        ),
    ]
