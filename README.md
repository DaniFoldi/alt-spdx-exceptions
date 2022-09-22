# What is this

The npm package `spdx-exceptions` is a package that contains a list of SPDX exceptions. This repository contains an alternative list (ideally at least as up-to-date) of exceptions.

# Why is this

I found ways to improve the original implementation of collecting the data. However, as `spdx-exceptions` is licensed under `CC-BY-3.0`, I did not want to contribute to the original.

# Where is this

By adding the following to your `package.json` you can use this package:

```jsonc
{

  "overrides": {
    "spdx-exceptions": "npm:alt-spdx-exceptions"
  }

}
```

# License, copyright, whatnot

This package is licensed under MIT, just like the [XML list](https://github.com/spdx/license-list-XML) that it uses.

The only thing that this package borrows is the format of exporting, to remain compatible.


Linux Foundation is a registered trademark of The Linux Foundation. Linux is a registered trademark of Linus Torvalds.
