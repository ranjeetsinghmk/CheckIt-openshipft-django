from django.db import models

# Create your models here.


def scramble_uploaded_filename(instance, filename):
    """
    Scramble / uglify the filename of the uploaded file, but keep the files extension (e.g., .jpg or .png)
    :param instance:
    :param filename:
    :return:
    """
    extension = filename.split(".")[-1]
    return "{}/{}.{}".format('updates', 'main', filename, extension)


def upload_link(instance, filename):
    return '/'.join(['updates', 'link', filename])


class Menu(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    photo = models.ImageField(upload_to=scramble_uploaded_filename)

    def __str__(self):
        return self.title


class Link(models.Model):
    title = models.CharField(max_length=50)
    target = models.CharField(max_length=200)
    icon = models.ImageField(upload_to=upload_link)
    menu = models.ForeignKey(Menu, related_name="links",
                             on_delete=models.CASCADE)

    def __str__(self):
        return self.title
