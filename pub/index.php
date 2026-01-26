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

//chdir('../');
print(getcwd());

#var_dump(parse_url($_SERVER['REQUEST_URI']));



require_once 'lib/Autoload.php';
use SchrodtSven\JSLab\Core\TplParser;
use SchrodtSven\JSLab\Mvc\Router;


$r = new Router();

$parser = new TplParser('base');


var_dump([$r, getcwd()]);


exit();
$parser->title = 'Sven\'s playground';
//$parser->jscript = 'assets/script/foo.js';

$parser->maincontent = '<h1>Foo</h1>';
$parser->setCss('base');
$parser->created = date('Y-m-d H:i:s');
$parser->setJs('foo');
//var_dump($parser);
echo $parser;//->render();