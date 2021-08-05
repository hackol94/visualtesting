Feature: Barchart
   
    Scenario: Hover a bar
    Given I have my app "http://localhost:7000/"
    And I have "backstop.json" class
    And I have some devices
    |   label  | width | height |
    |   phone  | 320   |    480 |
    |   tablet | 1024  |    768 |
    When I "hover"
    Then I check "color"


  Scenario: Check all data
    Given I have my app "http://localhost:7000/"
    And I have some devices
    |   label  | width | height |
    |   phone  | 320   |    480 |
    |   tablet | 1024  |    768 |
    Then I check "all"