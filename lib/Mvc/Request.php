<?php

declare(strict_types=1);
/**
 * HTTP request
 * 
 
 * @author Sven Schrodt<sven@schrodt.club>
 * @link https://github.com/SchrodtSven/JSLab
 * @package JSLab
 * @version 0.1
 * @since 2021-01-26
 */

namespace SchrodtSven\JSLab\Mvc;

class Request
{

    private string $path = ''; 
    private string $query = '';
    
    public function __construct(array $params = []) 
    {
        $this->path = $params['path'] ?? $this->path;
        $this->query = $params['query'] ?? $this->query;
        $this->_init();

    }

    private function _init()
    {
        // get important info from super globals
    }

}
