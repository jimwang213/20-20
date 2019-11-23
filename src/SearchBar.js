import React from 'react';
import Autosuggest from 'react-autosuggest';

const languages = [
    {
      name: 'C',
 
    },
    {
      name: 'C#',

    },
    {
      name: 'C++',

    },
    {
      name: 'Clojure',

    },
    {
      name: 'Elm',

    },
    {
      name: 'Go',

    },
    {
      name: 'Haskell',

    },
    {
      name: 'Java',

    },
    {
      name: 'Javascript',

    },
    {
      name: 'Perl',

    },
    {
      name: 'PHP',

    },
    {
      name: 'Python',

    },
    {
      name: 'Ruby',

    },
    {
      name: 'Scala',

    }
  ];
  
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return languages.filter(language => regex.test(language.name));
  }
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }
  
  class SearchBar extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: this.props.placeholder,
        suggestions: this.props.suggestions,
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      );
    }
  }
  
  export default SearchBar;