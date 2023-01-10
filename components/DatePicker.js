function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = require("react");
var React__default = _interopDefault(React);
var reactWaypoint = require("react-waypoint");
var dateFns = require("date-fns");

var index = React__default.memo(function ReactHorizontalDatePicker(_ref) {
  var enableDays = _ref.enableDays,
    enableDaysBefore = _ref.enableDaysBefore,
    enableScroll = _ref.enableScroll,
    selectedDay = _ref.selectedDay;

  var _useState = React.useState(new Date()),
    selectedDate = _useState[0],
    setSelectedDate = _useState[1];

  var _useState2 = React.useState(new Date()),
    headingDate = _useState2[0],
    setHeadingDate = _useState2[1];

  var _useState3 = React.useState(new Date()),
    currentWeek = _useState3[0],
    setCurrentWeek = _useState3[1];

  var _useState4 = React.useState(new Date()),
    currentDate = _useState4[0];

  var scrollWidth = 250;
  enableScroll = enableScroll || false;
  enableDays = enableScroll === true ? enableDays || 90 : 7;
  enableDaysBefore = enableScroll === true ? enableDaysBefore || 0 : 0;
  React.useEffect(
    function () {
      console.log(headingDate);
    },
    [headingDate]
  );

  var applyStyles = function applyStyles(day) {
    var classes = [];

    if (dateFns.isSameDay(day, selectedDate)) {
      classes.push(" date-day-Item-selected");
    }

    if (dateFns.isBefore(day, currentDate)) {
      classes.push(" date-day-item-disabled");
    }

    return classes.join(" ");
  };

  var _handlePosition = function _handlePosition(pos, date) {
    var currentPosition = pos.currentPosition;
    var previousPosition = pos.previousPosition;

    if (previousPosition == "inside" && currentPosition == "above") {
      setHeadingDate(date);
    }

    if (previousPosition == "above" && currentPosition == "inside") {
      setHeadingDate(dateFns.addDays(date, -1));
    }
  };

  var _verticalList = function _verticalList() {
    var _dayFormat = "E";
    var _dateFormat = "dd";
    var _monthFormat = "MMM";
    var _verticalListItems = [];

    var _startDay = dateFns.subDays(currentWeek, 1);

    var _loop = function _loop(i) {
      var _day = dateFns.format(dateFns.addDays(_startDay, i), _dayFormat);

      var _date = dateFns.format(dateFns.addDays(_startDay, i), _dateFormat);

      var _month = dateFns.format(dateFns.addDays(_startDay, i), _monthFormat);

      _verticalListItems.push(
        /*#__PURE__*/ React__default.createElement(
          reactWaypoint.Waypoint,
          {
            key: i,
            horizontal: true,
            onPositionChange: function onPositionChange(pos) {
              return _date == 1
                ? _handlePosition(pos, dateFns.addDays(_startDay, i))
                : "";
            },
          },
          /*#__PURE__*/ React__default.createElement(
            "div",
            {
              className: "wrapper",
            },
            dateFns.format(dateFns.addDays(_startDay, i), _dateFormat) == 1
              ? /*#__PURE__*/ React__default.createElement(
                  "div",
                  {
                    className: "scroll-head",
                  },
                  dateFns.format(dateFns.addDays(_startDay, i), "MMM")
                )
              : /*#__PURE__*/ React__default.createElement("div", {
                  className: "blank-space-div",
                }),
            /*#__PURE__*/ React__default.createElement(
              "div",
              {
                className:
                  "datepicker-date-day-Item wrapper " +
                  applyStyles(dateFns.addDays(_startDay, i)),
                onClick: function onClick() {
                  return onDateClick(dateFns.addDays(_startDay, i));
                },
              },
              /*#__PURE__*/ React__default.createElement(
                "div",
                {
                  className: "datepicker-day-label ",
                },
                _day
              ),
              /*#__PURE__*/ React__default.createElement(
                "div",
                {
                  className: "datepicker-date-label ripple ",
                },
                _date
              )
            )
          )
        )
      );
    };

    for (var i = -Math.abs(enableDaysBefore); i < enableDays; i++) {
      _loop(i);
    }

    return /*#__PURE__*/ React__default.createElement(
      "div",
      {
        id: "container",
        className:
          enableScroll === true
            ? " datepicker-datelist-scrollable"
            : " datepicker-dateList",
      },
      _verticalListItems
    );
  };

  var onDateClick = function onDateClick(day) {
    setSelectedDate(day);
    selectedDay(day);
  };

  var nextScroll = function nextScroll() {
    enableScroll
      ? (document.getElementById("container").scrollLeft += scrollWidth)
      : setCurrentWeek(dateFns.addWeeks(currentWeek, 1));
  };

  var prevScroll = function prevScroll() {
    enableScroll
      ? (document.getElementById("container").scrollLeft -= scrollWidth)
      : setCurrentWeek(dateFns.subWeeks(currentWeek, 1));
  };

  return /*#__PURE__*/ React__default.createElement(
    "div",
    {
      className: "datepicker-strip",
    },
    /*#__PURE__*/ React__default.createElement(
      "span",
      {
        className: "datepicker-month-label ",
      },
      dateFns.format(selectedDate, "dd MMM yyy")
    ),
    /*#__PURE__*/ React__default.createElement(
      "div",
      {
        className: "datepicker",
      },
      /*#__PURE__*/ React__default.createElement(
        "div",
        {
          className: "wrapper",
        },
        /*#__PURE__*/ React__default.createElement(
          "div",
          {
            className: "scroll-head",
          },
          dateFns.format(headingDate, "MMM")
        ),
        /*#__PURE__*/ React__default.createElement(
          "div",
          {
            className: "button-previous",
          },
          " ",
          /*#__PURE__*/ React__default.createElement(
            "button",
            {
              className: "datepicker-button-previous",
              onClick: prevScroll,
            },
            "\u2794"
          )
        )
      ),
      _verticalList(),
      /*#__PURE__*/ React__default.createElement(
        "div",
        {
          className: "wrapper",
        },
        /*#__PURE__*/ React__default.createElement("div", {
          className: "blank-space-div",
        }),
        /*#__PURE__*/ React__default.createElement(
          "div",
          {
            className: "button-previous",
          },
          " ",
          /*#__PURE__*/ React__default.createElement(
            "button",
            {
              className: "datepicker-button-next",
              onClick: nextScroll,
            },
            "\u2794"
          )
        )
      )
    )
  );
});

module.exports = index;
//# sourceMappingURL=index.js.map
