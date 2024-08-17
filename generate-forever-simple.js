// ==UserScript==
// @name         Generate Forever Simple
// @namespace    http://tampermonkey.net/
// @version      356c53d
// @description  create a generate forever button
// @author       judgeou
// @copyright    2024+, judgeou (https://github.com/judgeou)
// @homepageURL  https://github.com/judgeou/generate-forever-simple
// @match        *://novelai.net/image*
// @grant        none
// ==/UserScript==
"use strict";

(function () {
    let status = 'OFF'
    const btn = document.createElement('button')
    btn.style = `
    position: fixed;
    color: black;
    cursor: pointer;
`
    btn.textContent = 'Generation Forever: OFF'
    btn.addEventListener('click', () => {
        if (status == 'OFF') {
            status = 'ON'
        } else if (status == 'ON') {
            status = 'OFF'
        }

        btn.textContent = 'Generation Forever: ' + status
    })

    document.body.appendChild(btn)

    function loop () {
        if (status == 'ON') {
            let span = [...document.querySelectorAll('button span')].filter(item => item.textContent === 'Generate 1 Image' && item.clientWidth)[0]
            if (!span.parentElement.disabled) {
                span.click()
            }
        }
        setTimeout(loop, 1000)
    }

    loop()
})()
