# Generated by Django 3.0.3 on 2022-02-06 13:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0074_auto_20220206_1225'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='26545', max_length=12),
        ),
    ]
