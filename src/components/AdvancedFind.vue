<template>
  <div class="advanced-find">
    <h1>Advanced Find</h1>
    <p>Let's explore the find feature:</p>
    <ul>
      <li>
        <p>
          Click <button @click="openFileWithData">here</button> to open a file
          with test data.
        </p>
      </li>
      <li>
        <p>Click <button @click="executeFind('John')">Find</button>.</p>
        <p>In the find dialog, enter "John".</p>
        <p>Make sure none of the boxes are checked.</p>
        <p>Hit "Find All".</p>
        <p>
          In addition to "John" alone, it also found the "John" in "Johnson".
        </p>
      </li>
      <li>
        <p>
          Click
          <button @click="executeRegexFind('\\w+ \\w+ \\w+', true)">
            Find with Regex</button
          >.
        </p>
        <p>
          In the find dialog, enter "\w+ \w+ \w+". (This regular expression
          finds three words separated by spaces.)
        </p>
      </li>
    </ul>
    <p>
      For more information about regular expressions, click the
      <button @click="showRegexHelp">RegEx Help</button> button.
    </p>
  </div>
</template>

<script>
export default {
  name: "AdvancedFind",
  methods: {
    openFileWithData() {
      // For demonstration, simply log to console
      console.log("Simulated file opening with test data.");
    },
    executeFind(searchTerm) {
      // For demonstration, simply log to console
      console.log(`Simulated finding of the term: ${searchTerm}`);
    },
    executeRegexFind(regex, regexEnabled = false) {
      // For demonstration, simply log to console
      console.log(
        `Simulated regex search with: ${regex}, regex enabled: ${regexEnabled}`
      );
    },
    showRegexHelp() {
      // For demonstration, simply log to console
      console.log("Simulated action to show regex help.");
    },
  },
};
</script>

<style scoped>
.advanced-find ul {
  list-style-type: none;
}
.advanced-find li p {
  margin-bottom: 5px;
}
</style>
