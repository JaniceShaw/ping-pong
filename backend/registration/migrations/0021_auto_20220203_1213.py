# Generated by Django 3.0.3 on 2022-02-03 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0020_auto_20220203_1212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='code',
            field=models.CharField(default='36915', max_length=12),
        ),
    ]
