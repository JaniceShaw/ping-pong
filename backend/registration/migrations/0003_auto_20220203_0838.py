# Generated by Django 3.0.3 on 2022-02-03 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0002_auto_20220203_0829'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='93399', max_length=12),
        ),
    ]
