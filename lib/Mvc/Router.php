<?php

declare(strict_types=1);
/**
 * HTTP routing
 * 
 
 * @author Sven Schrodt<sven@schrodt.club>
 * @link https://github.com/SchrodtSven/JSLab
 * @package JSLab
 * @version 0.1
 * @since 2021-01-26
 */

namespace SchrodtSven\JSLab\Mvc;

use SchrodtSven\JSLab\Mvc\Request;

class Router
{

    // this is just a convention - do not think 
    private const string DFT_MOD = 'app';
    private const string DFT_CTLR = 'index';
    private const string DFT_ACT = 'default';

    private Request $req;

    private string $mod;

    private string $ctlr;

    private string $act;

    public function __construct()
    {

        $this->mod = self::DFT_MOD;
        $this->ctlr = self::DFT_CTLR;
        $this->act = self::DFT_ACT;

        $tmp = parse_url($_SERVER['REQUEST_URI']);
        $parts = explode('/', $tmp['path']);
        $this->req = new Request($tmp);



        if (empty($parts[0]))
            unset($parts[0]);
        $parts = array_values($parts);
        $li = count($parts) - 1;
        if (empty($parts[$li]))
            unset($parts[$li]);

        $this->_parse($parts);
    }

    private function _parse(array $parts)
    {
        echo __FUNCTION__ . ' :: ';
        switch (count($parts)) {
            case 1:
                $this->mod = array_shift($parts);
                break;

            case 2:
                $this->mod = array_shift($parts);
                $this->ctlr = array_shift($parts);
                break;

            default:
                $this->mod = array_shift($parts);
                $this->ctlr = array_shift($parts);
                $this->act = array_shift($parts);
                break;
        }
    }
}
