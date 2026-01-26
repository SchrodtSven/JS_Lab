<?php

declare(strict_types=1);
/**
 * Bootstrapping  ...
 * 
 * @author Sven Schrodt<sven@schrodt.club>
 * @link https://github.com/SchrodtSven/JSLab
 * @package JSLab
 * @version 0.1
 * @since 2026-01-26
 */


require_once 'lib/Autoload.php';
use SchrodtSven\JSLab\Core\TplParser;


$parser = new TplParser();
$parser->title = 'Sven\'s playground';
//$parser->jscript = 'assets/script/foo.js';
$parser->maincontent = '<h1>Foo</h1>';
$parser->setCss('base');
$parser->setJs('foo');
//var_dump($parser);
echo $parser;//->render();