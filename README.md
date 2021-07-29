### Running the benchmark

You can start a benchmark run using the following:

```shell
N=1000 M=2 npm run bench
```

- `N=1000`: instructs the run to build a site with 1000 pages
- `M=2`: instructs nodejs to use up to 2gb of memory for its long term storage
- Deletes generates files from previous run
- Generates `N` pages with pseudo-random content, copies one image from pool per page generated
- Runs `gatsby clean`
- Runs `gatsby build`

The default `yarn bench` will build 512 pages with 1gb memory.
