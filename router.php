<?php

declare(strict_types=1);
/**
 *  router.php - to be used with PHP 8.* Development Server 
 * 
 * 
 * @see make
 * @author Sven Schrodt<sven@schrodt.club>
 * @link https://github.com/SchrodtSven/P3tite
 * @package P3tite
 * @version 0.1
 * @since 2022-08-09
 */

if (!file_exists($_SERVER['DOCUMENT_ROOT'] . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) { // if requested resource does not exist in file system:
    $_SERVER['SCRIPT_NAME'] = 'index.php'; // setting up current script name in super global 
    require_once 'pub/index.php'; // route to index.php
} else {
    return false;
}
