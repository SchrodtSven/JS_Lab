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

chdir('../');
require_once 'lib/Autoload.php';
use SchrodtSven\JSLab\Core\TplParser;
use SchrodtSven\JSLab\Mvc\Router;

//$parser = new TplParser('canvas');
$parser = new TplParser('plotter');
$parser->title = 'Sven\'s playground on canvas';
#$parser->maincontent = '<h1>Foo</h1>';
$parser->setCss('base');
$parser->created = date('Y-m-d H:i:s');
$parser->setJs('canvas');
echo $parser;//->render();
//$parser->save('foo.html');