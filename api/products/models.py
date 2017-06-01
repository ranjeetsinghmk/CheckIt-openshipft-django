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
    return "{}/{}/{}.{}".format('updates', 'main', filename, extension)


def upload_link(instance, filename):
    return '/'.join(['updates', 'link', filename])


class Detail(models.Model):
    display_name = models.CharField(max_length=20)
    desc = models.TextField()
    photo = models.ImageField(
        upload_to='products/detail/photos/%Y/%m/%d', default=None, blank=True, null=True)

    def __str__(self):
        return self.display_name


class Menu(models.Model):
    title = models.CharField(max_length=50)
    desc = models.TextField()
    detail = models.OneToOneField(Detail, default=None, blank=True, null=True)
    photo = models.ImageField(upload_to=scramble_uploaded_filename)

    def __str__(self):
        return self.title


class Link(models.Model):
    title = models.CharField(max_length=50)
    target = models.CharField(max_length=200)
    icon = models.ImageField(upload_to=upload_link, blank=True, null=True)
    menu = models.ForeignKey(Menu, related_name="links",
                             on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.title


class Component(models.Model):
    heading = models.CharField(max_length=60)
    text = models.TextField()
    actions = models.ManyToManyField(Link, blank=True, null=True)
    detail = models.ForeignKey(
        Detail, related_name="components", on_delete=models.CASCADE, blank=True)
    photo = models.FileField(
        upload_to='products/detail/compontents/%Y/%m/%d', default=None, blank=True, null=True)
    background = models.CharField(max_length=100, default="black")
    background1 = models.CharField(max_length=100, default="black")
    aligntype = models.CharField(max_length=5, default="LR", choices=(
        ('LR', 'Left To Right'), ('C', 'Center'), ('RL', 'Right to Left')))

    def __str__(self):
        return self.heading
