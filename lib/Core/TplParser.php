<?php

declare(strict_types=1);
/**
 * Very simple template parser using {{NAME}} placeholders
 * 
 
 * @author Sven Schrodt<sven@schrodt.club>
 * @link https://github.com/SchrodtSven/JSLab
 * @package JSLab
 * @version 0.1
 * @since 2021-01-26
 */

namespace SchrodtSven\JSLab\Core;

class TplParser
{

    private const string TPL_PH = '{{%s}}';
    private const string TPL_CSS = 'assets/style/%s.css';
    private const string TPL_JS = 'assets/script/%s.js';

    private string $tplRoot = 'tpl/';
    private string $cssFile = 'base';


    private $replacement = [];

    public function __construct(private string $tpl = 'index') {}

    public function __set($name, $value): void
    {
        $this->replacement[$name] = $value;
    }

    public function __get($name): ?string
    {
        return $this->replacement[$name] ?? null;
    }

    public function setCss(string $css = 'base')
    {
        $this->replacement['css'] = sprintf(self::TPL_CSS, $css);
    }

    public function setJs(string $js = 'foo')
    {
        $this->replacement['js'] = sprintf(self::TPL_JS, $js);
    }


    public function render(): string
    {
        $raw = file_get_contents("{$this->tplRoot}{$this->tpl}.tpl");

        foreach ($this->replacement as $k => $v) {
            $raw = str_replace(
                sprintf(self::TPL_PH, $k),
                $v,
                $raw
            );
        }

        return $raw;
    }

    public function __toString()
    {
        return $this->render();
    }

    /**
     * Saving dynamically rendered content to static file
     *
     * @param string $fn
     * @return self
     */
    public function save(string $fn): self
    {
        file_put_contents($fn, $this->render());
        return $this;
    }

    /**
     * Get the value of replacement
     */
    public function getReplacement(): array
    {
        return $this->replacement;
    }

    /**
     * Set the value of replacement
     */
    public function setReplacement($replacement): self
    {
        $this->replacement = $replacement;

        return $this;
    }
}
