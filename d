[1mdiff --git a/src/app/home/home.page.scss b/src/app/home/home.page.scss[m
[1mindex 082df69..b3e7620 100644[m
[1m--- a/src/app/home/home.page.scss[m
[1m+++ b/src/app/home/home.page.scss[m
[36m@@ -44,7 +44,7 @@[m [m$color-cuartiario: #ffffff;[m
 }[m
 [m
 ion-title {[m
[31m-  animation: slideAndFade 5s infinite, slideAndFadeReverse 5s infinite;[m
[32m+[m[32m  animation: slideAndFade 10s infinite, slideAndFadeReverse 10s infinite;[m
   /* 5s es la duración de la animación (2500ms + 2500ms) */[m
 }[m
 [m
[1mdiff --git a/src/app/home/home.page.ts b/src/app/home/home.page.ts[m
[1mindex 1732f31..f8a2325 100644[m
[1m--- a/src/app/home/home.page.ts[m
[1m+++ b/src/app/home/home.page.ts[m
[36m@@ -37,7 +37,7 @@[m [mexport class HomePage {[m
       .create()[m
       .addElement(document.querySelectorAll('.move-animation'))[m
       .fromTo('transform', 'translateX(0%)', 'translateX(100%)')[m
[31m-      .duration(1000); // Duración de 1 segundo[m
[32m+[m[32m      .duration(10000); // Duración de 1 segundo[m
 [m
     await animation.play();[m
 [m
