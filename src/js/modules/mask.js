function phoneMask(inputsSelector){
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        if (def.length >= val.length) {
            val = def;
        }
        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });
        if (event.type == 'blur') {
            if (this.value.length == 2 || this.value.length < matrix.length) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }
    const inputs = document.querySelectorAll(inputsSelector);
   
    inputs.forEach(item => {
        item.addEventListener('click',() => {
            item.focus();
            item.selectionStart = item.value.length;
        });
        item.addEventListener('blur', createMask);
        item.addEventListener('input', createMask);
        item.addEventListener('focus', createMask);
    });
}

export default phoneMask;