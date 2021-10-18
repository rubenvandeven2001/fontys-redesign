<?php
    // Include Twig-templating engine
    require_once 'vendor/autoload.php';

    // Define the baseUrl
    $baseUrl = "http://localhost/school-projects/fontys-portal-proto-v1/";
    // Get the URL of the current requested page
    $pageUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    // Store the page-specifier from the URL
    $pageSpecifier = str_replace($baseUrl, "", $pageUrl);

    $contact = array(
        0 => array(
            "name" => "Marco van der Lee",
            "tel" => "+31 6 53503476",
            "mail" => "m.vanderlee@fontys.nl",
            "photo" => "https://apps.fhict.nl/userphotos/public/I872451.jpg?width=250&height=250&mode=crop&anchor=top",
        ),
        1 => array(
            "name" => "Ruud Schunselaar",
            "tel" => "+31 6 53503476",
            "mail" => "r.schunselaars@fontys.nl",
            "photo" => "https://apps.fhict.nl/userphotos/public/I884017.jpg?width=250&height=250&mode=crop&anchor=top",
        ),
        2 => array(
            "name" => "Hans van Halteren",
            "tel" => "+31 6 53503476",
            "mail" => "h.vanhalteren@fontys.nl",
            "photo" => "https://apps.fhict.nl/userphotos/public/I872359.jpg?width=250&height=250&mode=crop&anchor=top",
        ),
        3 => array(
            "name" => "Mijke van der Zee",
            "tel" => "+31 6 53503476",
            "mail" => "m.vanderzee@fontys.nl",
            "photo" => "https://apps.fhict.nl/userphotos/public/I873914.jpg?width=250&height=250&mode=crop&anchor=top",
        ),
        4 => array(
            "name" => "Joris Graaumans",
            "tel" => "+31 6 12345678",
            "mail" => "j.graaumans@fontys.nl",
            "photo" => "./img/sample-teacher.jpg",
        )
    );
    
    // Let twig read the templates folder
    $loader = new \Twig\Loader\FilesystemLoader('templates');
    // Create a new Twig envirorment (workspace)
    $twig = new \Twig\Environment($loader);
    // Render the base twig-file
    echo $twig->render('/layouts/base.twig', ['page' => $pageSpecifier, 'contact' => $contact]);
?>