# Generated by Django 3.0.3 on 2022-02-03 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0007_auto_20220203_0838'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='sub_categories',
        ),
        migrations.AddField(
            model_name='category',
            name='sub_categories',
            field=models.ManyToManyField(blank=True, related_name='category', to='category.SubCategory'),
        ),
    ]