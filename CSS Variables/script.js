const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // if we dont use 'OR NOTHING' we will get an undefined error
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));