module.exports = [
  {
    type: 'input',
    name: 'path',
    message: 'Path (/src/pages/<path>/name):',
    validate(value) {
      if (!value.length) {
        return 'View components must have a path (/src/pages/<path>/name).';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'View components must have a name.';
      }
      return true;
    }
  },
  {
    type: 'confirm',
    name: 'useStyles',
    message: 'Add <style> block?',
    initial: true
  }
];
