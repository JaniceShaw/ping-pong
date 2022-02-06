# Generated by Django 3.0.3 on 2022-02-03 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0012_auto_20220203_1155'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subcategory',
            name='category_from',
        ),
        migrations.AlterField(
            model_name='category',
            name='sub_categories',
            field=models.ManyToManyField(blank=True, related_name='category', to='category.SubCategory'),
        ),
    ]
