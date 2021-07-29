### Installation

Install dependencies. Note: tested with version `1.0.19` of `gatsby-plugin-newrelic-test`.

```shell
npm install
```
### Running the benchmark

You can start a benchmark run using the following:

```shell
N=1000 M=2 npm run bench
```

- `N=1000`: instructs the run to build a site with 1000 pages
- `M=2`: instructs nodejs to use up to 2gb of memory for its long term storage
- Deletes generated files from previous run
- Generates `N` pages with pseudo-random content, copies one image from `fab-images` per page generated
- Runs `gatsby clean`
- Runs `gatsby build`

The default `npm run bench` will build 512 pages with 1gb memory.

### Viewing the app

Set the following environment variables:

```
NEW_RELIC_INSERT_KEY=your-insert-key
NEW_RELIC_LICENSE_KEY=your-license-key
SITE_NAME="your-site-name"
NEW_RELIC_HOME="./node_modules/gatsby-plugin-newrelic-test"
```

Assuming your credentials are valid, you should now be able to run the app.

```shell
gatsby develop
```
