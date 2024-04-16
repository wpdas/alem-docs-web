# CSS Files

During compilation, css files are merged and become just one, so be careful not to overwrite certain resources such as classes. Prefer to use `styled-components` as this type of problem is automatically corrected by the compiler.

**css modules** feature is being developed and will be available in the next versions. When this is done, the css files will no longer be merged in one.
