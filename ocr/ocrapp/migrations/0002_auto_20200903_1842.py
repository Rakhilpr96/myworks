# Generated by Django 3.0.5 on 2020-09-03 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ocrapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='Uplod_Img',
            new_name='Upload_Img',
        ),
        migrations.AlterField(
            model_name='image',
            name='name',
            field=models.CharField(default='photo', max_length=50),
        ),
    ]